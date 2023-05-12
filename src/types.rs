use worker::*;
use anyhow::{
    Result,
};

// TODO: Much better error handling
// This is essentially a shitty way to do middleware

pub struct SharedData {
    pub bucket_id: String
}

impl SharedData {
    pub fn new(req: &Request) -> Result<Self> {
        let bucket_id = with_bucket_id(req);
        Ok(Self { bucket_id })
    }
}

fn with_bucket_id(req: &Request) -> String {
   // Try reading the bucket id from the header
    let header = req.headers().get("x-bucket-id").unwrap();
    match header {
        Some(id) => id.to_owned(),
        None => "Missing x-bucket-id header".to_owned(),
        // None => Err(Error::msg("Missing x-bucket-id header")),
    }
}