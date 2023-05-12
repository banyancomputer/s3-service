use worker::*;

use crate::types::SharedData;

// pub async fn post<D>(
//     _req: Request,
//     _ctx: RouteContext<D>,
// ) -> Result<Response> {


//     Response::ok("Hello from Workers!")
// }

pub async fn get(
    _req: Request,
    _ctx: RouteContext<SharedData>,
) -> Result<Response> {
    let blockstore = _ctx.bucket("BLOCKSTORE")?;
    let shared_data: SharedData = _ctx.data;
    let bucket_id = shared_data.bucket_id.clone();
    Response::ok(format!("Hello from bucket {}", bucket_id))
}