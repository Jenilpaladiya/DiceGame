# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# OOFPP Habit Tracker (CLI)

## Overview
A Python **CLI-only** habit tracking application that demonstrates:
- **Object-Oriented Programming (OOP):** domain modeling with `Habit` and timestamped `Completion` events
- **Persistence:** data stored in **SQLite** so habits and check-offs remain available across sessions
- **Functional Programming (FP):** analytics implemented as pure functions over habits + completion events
- **Testing:** basic functionality covered with **pytest**

> This project intentionally uses a command-line interface. A graphical user interface (GUI) is **not required**.

---

## Features
- Create habits with **DAILY** or **WEEKLY** periodicity
- Record **timestamped check-offs** (completion event log)
- Persist habits and completions in **SQLite**
- Analytics:
  - list all habits
  - filter habits by periodicity
  - **longest streak overall**
  - **longest streak for a specific habit**
- Fixtures for repeatable demos:
  - **5 predefined habits**
  - **4 weeks of completion data**
- Unit tests for repository + analytics

---

## Requirements
- macOS / Linux / Windows
- **Python 3.7+** (recommended 3.10+)
- `pip` (included with most Python installs)

---

## Setup (venv)
Create and activate a virtual environment from the project root:

```bash
python3 -m venv .venv
source .venv/bin/activate
