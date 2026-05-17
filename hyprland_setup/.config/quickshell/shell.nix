
{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.quickshell
  ];

  shellHook = ''
    echo "Run 'qs' to start the shell!"
  '';
}

