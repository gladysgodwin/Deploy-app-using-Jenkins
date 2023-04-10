terraform {
  backend "remote" {
    hostname = "app.terraform.io"
    organization = "AltSchoolProject-byGladys"

    workspaces {
      name = "jenkins-project"
    }
  }
  
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.47.0"
    }
    
    random = {
      source  = "hashicorp/random"
      version = "~> 3.4.3"
    }

    cloudinit = {
      source  = "hashicorp/cloudinit"
      version = "~> 2.2.0"
    }
  }

  required_version = "~> 1.3"
}