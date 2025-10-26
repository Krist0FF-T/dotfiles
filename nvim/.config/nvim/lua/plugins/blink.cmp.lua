return {
    "saghen/blink.cmp",
    opts = {
        enabled = function() return not vim.tbl_contains({ "lua", "markdown" }, vim.bo.filetype) end,
    },
}
