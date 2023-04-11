terraform {
  backend "s3" {
    bucket = "jenkins-tfst-bucket"
    key    = "terraform.tfstate"
    region = "eu-west-1"
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