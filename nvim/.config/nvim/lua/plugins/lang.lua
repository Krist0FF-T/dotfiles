return {
    {
        "nvim-treesitter/nvim-treesitter",
        opts = {
            ensure_installed = {
                "lua",
                "python",
                "bash",
                "rust",

                "html",
                "javascript",
                "css",
                "scss",
                "json",
            },
        },
    },
    {
        "neovim/nvim-lspconfig",
        opts = {
            servers = {
                lua_ls = {},
                -- pyright = {},
                clangd = {},
                pylsp = {
                    rope_autoimport = {
                        enabled = true,
                    },
                },
            },
        },
    },
}
