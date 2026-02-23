SHELL := /bin/bash

# Indicate that these are commands
.PHONY: help dev build deploy deploy-all
# Assign `make` command to `make help` output
.DEFAULT_GOAL := help

# Styling
BOLD      := \033[1m
CYAN      := \033[36m
GREEN     := \033[32m
YELLOW    := \033[33m
RED       := \033[31m
RESET     := \033[0m
CLEAR_EOL := \033[K

VALID_PROJECTS := bgcg catch conway delicious fyi md redux sick space stacker v0 v1 v2

help:
	@printf "$(BOLD)Usage:$(RESET)\n"
	@printf "  $(CYAN)make dev$(RESET) [project]     Start dev server for a project\n"
	@printf "  $(CYAN)make build$(RESET) [project]   Build a project's static assets\n"
	@printf "  $(CYAN)make deploy$(RESET) [project]  Deploy a project to production\n"
	@printf "  $(CYAN)make deploy-all$(RESET)        Deploy all projects, but can't exit early\n"
	@printf "\n"
	@printf "$(BOLD)Projects:$(RESET) $(VALID_PROJECTS)\n"

dev:
	@if [ -z "$(filter $(word 2,$(MAKECMDGOALS)),$(VALID_PROJECTS))" ]; then \
		echo "Usage: make dev [project]"; \
		echo "Valid projects: $(VALID_PROJECTS)"; \
		exit 1; \
	fi
	pnpm run $(word 2,$(MAKECMDGOALS)):dev

build:
	@if [ -z "$(filter $(word 2,$(MAKECMDGOALS)),$(VALID_PROJECTS))" ]; then \
		echo "Usage: make build [project]"; \
		echo "Valid projects: $(VALID_PROJECTS)"; \
		exit 1; \
	fi
	pnpm run $(word 2,$(MAKECMDGOALS)):build

deploy:
	@if [ -z "$(filter $(word 2,$(MAKECMDGOALS)),$(VALID_PROJECTS))" ]; then \
		echo "Usage: make deploy [project]"; \
		echo "Valid projects: $(VALID_PROJECTS)"; \
		exit 1; \
	fi
	pnpm run $(word 2,$(MAKECMDGOALS)):deploy


deploy-all:
	@mkdir -p /tmp/static-museum; \
	PROJECTS=($(VALID_PROJECTS)); \
	N=$${#PROJECTS[@]}; \
	for p in "$${PROJECTS[@]}"; do \
		rm -f "/tmp/static-museum/deploy-status-$$p"; \
		( pnpm run "$$p:deploy" > "/tmp/static-museum/deploy-$$p.log" 2>&1 \
		  && echo "done" > "/tmp/static-museum/deploy-status-$$p" \
		  || echo "failed" > "/tmp/static-museum/deploy-status-$$p" ) & \
	done; \
	for p in "$${PROJECTS[@]}"; do \
		printf "  %-12s $(YELLOW)%-13s$(RESET)\n" "$$p" "▷ in progress"; \
	done; \
	completed=0; \
	while [ "$$completed" -lt "$$N" ]; do \
		sleep 0.2; \
		completed=0; \
		printf "\033[$${N}A"; \
		for p in "$${PROJECTS[@]}"; do \
			if [ -f "/tmp/static-museum/deploy-status-$$p" ]; then \
				s=$$(cat "/tmp/static-museum/deploy-status-$$p"); \
				if [ "$$s" = "done" ]; then \
					printf "  %-12s $(GREEN)%-13s$(RESET)$(CLEAR_EOL)\n" "$$p" "✓ done"; \
				else \
					printf "  %-12s $(RED)%-13s$(RESET)$(CLEAR_EOL)\n" "$$p" "✗ failed"; \
				fi; \
				completed=$$((completed + 1)); \
			else \
				printf "  %-12s $(YELLOW)%-13s$(RESET)$(CLEAR_EOL)\n" "$$p" "▷ in progress"; \
			fi; \
		done; \
	done; \
	echo ""; \
	failed=(); \
	for p in "$${PROJECTS[@]}"; do \
		s=$$(cat "/tmp/static-museum/deploy-status-$$p" 2>/dev/null); \
		[ "$$s" = "failed" ] && failed+=("$$p"); \
		rm -f "/tmp/static-museum/deploy-status-$$p"; \
	done; \
	if [ "$${#failed[@]}" -gt 0 ]; then \
		echo "Failed: $${failed[*]}"; \
		echo "Logs: /tmp/static-museum/deploy-<project>.log"; \
		exit 1; \
	else \
		echo "All deployments successful."; \
	fi

# Allows commands to work, essentially runs `make dev` + `make [project]` by default, so catch that
$(VALID_PROJECTS):
	@:
