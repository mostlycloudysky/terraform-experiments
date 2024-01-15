terraform {

  backend "remote" {
    hostname     = "app.terraform.io"
    organization = "cloudysky"

    workspaces {
      name = "sandeep-sandbox"
    }
  }

  # cloud {
  #   organization = "cloudysky"

  #   workspaces {
  #     name_prefix = "my-app-"
  #   }
  # }
}
