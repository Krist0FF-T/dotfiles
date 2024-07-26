-- Options are automatically loaded before lazy.nvim startup
-- Default options that are always set: https://github.com/LazyVim/LazyVim/blob/main/lua/lazyvim/config/options.lua
-- Add any additional options here
local opt = vim.opt

opt.guicursor = ""

opt.spell = true

-- Sync with system clipboard
-- opt.clipboard = vim.env.SSH_TTY and "" or "unnamedplus"

-- Don't sync with system clipboard
opt.clipboard = vim.env.SSH_TTY and "" or "unnamed"

opt.cursorline = true -- Enable highlighting of the current line
opt.mouse = "a" -- Enable mouse mode
opt.pumblend = 10 -- Popup blend
opt.pumheight = 10 -- Maximum number of entries in a popup

opt.number = true -- Print line number
opt.relativenumber = true -- Relative line numbers

opt.shiftwidth = 4 -- Size of an indent
opt.tabstop = 4 -- Number of spaces tabs count for
opt.smartindent = true -- Insert indents automatically

opt.sidescrolloff = 8 -- Columns of context
opt.scrolloff = 8 -- Lines of context

opt.smartcase = true -- Don't ignore case with capitals
opt.wrap = false -- Disable line wrap
