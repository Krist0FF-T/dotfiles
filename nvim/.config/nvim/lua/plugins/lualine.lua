-- the opts function can also be used to change the default opts:
return {
    "nvim-lualine/lualine.nvim",
    event = "VeryLazy",
    opts = function(_, opts)
        opts.sections.lualine_z = {}
    end,
}
