# To learn more about how to use Nix to configure your environment
# see: https://developers.google.com/idx/guides/customize-idx-env
{ pkgs, ... }: {
  # Which nixpkgs channel to use.
  channel = "stable-23.11"; # or "unstable"

  # Use https://search.nixos.org/packages to find packages
  packages = [
    # pkgs.go
    # pkgs.python311
    # pkgs.python311Packages.pip
<<<<<<< HEAD
    pkgs.nodejs_20
    pkgs.nodePackages.nodemon
  ];

  # Sets environment variables in the workspace
  env = {
    PORT = 3000;
  };
=======
    # pkgs.nodejs_20
    # pkgs.nodePackages.nodemon
  ];

  # Sets environment variables in the workspace
  env = {};
>>>>>>> origin/main
  idx = {
    # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"
    extensions = [
      # "vscodevim.vim"
    ];

    # Enable previews
    previews = {
      enable = true;
      previews = {
         web = {
<<<<<<< HEAD
        #   # Example: run "npm run dev" with PORT set to IDX's defined port for previews,
        #   # and show it in IDX's web preview panel
        command = ["npm" "run" "dev" "--"
          "--port"
          "$PORT"
          "--host"
          "0.0.0.0"
          "--disable-host-check"];
        manager = "web";
=======
           # Example: run "npm run dev" with PORT set to IDX's defined port for previews,
           # and show it in IDX's web preview panel
           command = ["npx" "astro" "dev" "--port" "$PORT" "--host" "0.0.0.0"];
           manager = "web";
>>>>>>> origin/main
           env = {
             # Environment variables to set for your server
             PORT = "$PORT";
           };
         };
      };
    };

    # Workspace lifecycle hooks
    workspace = {
      # Runs when a workspace is first created
      onCreate = {
        # Example: install JS dependencies from NPM
<<<<<<< HEAD
        npm-install = "npm install --force";
=======
         npm-install = "npm install";
         vercel-install = "npm i vercel";
>>>>>>> origin/main
      };
      # Runs when the workspace is (re)started
      onStart = {
        # Example: start a background task to watch and re-build backend code
<<<<<<< HEAD
        #watch-backend = "npm run watch-backend";
=======
        # watch-backend = "npm run watch-backend";
        vercel-env = "vercel pull";
>>>>>>> origin/main
      };
    };
  };
}
