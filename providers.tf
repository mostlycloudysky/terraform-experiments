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
      prefix = "my-app-"
    }
  }

  # cloud {
  #   organization = "cloudysky"

  #   workspaces {
  #     name_prefix = "my-app-"
  #   }
  # }
}
