provider "cloudflare" {
  email = "${var.cloudflare_email}"
  token = "${var.cloudflare_token}"
}

provider "google" {
  credentials = "${file("storage.json")}"
  project     = "${var.project}"
}

resource "cloudflare_worker_script" "buzzwords" {
  zone    = "${var.zone}"
  content = "${file("dist/worker.js")}"
}

resource "google_storage_bucket_object" "worker" {
  name             = "worker.js"
  content_encoding = "application/javascript"
  content          = "${file("dist/worker.js")}"
  bucket           = "${var.bucket}"
}
