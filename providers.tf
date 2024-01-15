terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.8.0"
    }
  }

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
