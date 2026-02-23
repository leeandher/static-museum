# Indicate that these are commands
.PHONY: help dev deploy
# Assign `make` command to `make help` output
.DEFAULT_GOAL := help

# Styling
BOLD  := \033[1m
CYAN  := \033[36m
RESET := \033[0m

VALID_PROJECTS := bgcg catch conway delicious fyi md redux sick space stacker v0 v1 v2

help:
	@printf "$(BOLD)Usage:$(RESET)\n"
	@printf "  $(CYAN)make dev$(RESET) [project]     Start dev server for a project\n"
	@printf "  $(CYAN)make build$(RESET) [project]   Only build a project\n"
	@printf "  $(CYAN)make deploy$(RESET) [project]  Build and deploy a project\n"
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
	pnpm run $(word 2,$(MAKECMDGOALS)):build
	pnpm run $(word 2,$(MAKECMDGOALS)):deploy

# Allows commands to work, essentially runs `make dev` + `make [project]` by default, so catch that
$(VALID_PROJECTS):
	@:
