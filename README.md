![Cloudflare GraphQL Gateway](/img/workers-react.png)

Workers React Example
====
Combining the power of Cloudflare Workers and React will allow you to render the
same React code you would on the browser on Cloudflare Workers.

### Dependencies
- [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/en/docs/install#debian-stable)

### Instructions

- `yarn preview`

#### Terraform
If you'd like to use terraform to upload your worker scripts, you'll need a
vars file with the following variables

```hcl
# Cloudflare variables
variable "cloudflare_email" {
  default = "dmr@bell-labs.com"
}

variable "cloudflare_token" {
  default = "00000000000000000000000000"
}

# GCP exmaple variables
variable "project" {
  default = "my-project"
}

variable "zone" {
  default = "buzzwords.app"
}

variable "bucket" {
  default = "buzzwords"
}
```
after adding this file as `vars.tf` (terraform will pickup any `.tf` extension file) do
`terraform init` and `terraform apply`


### About
[Cloudflare Workers](http://developers.cloudflare.com/workers/) allow you to write JavaScript which runs on all of Cloudflare's
150+ global data centers.

[React](https://reactjs.org) makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
