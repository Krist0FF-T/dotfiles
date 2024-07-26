# My dotfiles
These are my personal dotfiles (config files). Use at your own risk.
A general tip: Don't run random commands that you don't know.

## Install
1. ensure you have git and stow installed.
2. clone the repo
```bash
git clone https://github.com/Krist0FF-T/dotfiles.git
```
3. cd into the cloned repo
```bash
cd dotfiles
```
4. create symlinks with stow
```bash
stow <packages you want to use (read the package list)>
```

stow package list:
- nvim
- hyprland_setup
- wallpapers

## Update
```bash
cd dotfiles
git pull
```
