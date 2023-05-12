// use serde_json::json;
use worker::*;

mod utils;
mod handlers;

pub mod types;
use crate::types::SharedData;

fn log_request(req: &Request) {
    console_log!(
        "{} - [{}], located at: {:?}, within: {}",
        Date::now().to_string(),
        req.path(),
        req.cf().coordinates().unwrap_or_default(),
        req.cf().region().unwrap_or_else(|| "unknown region".into())
    );
}



// One time setup code, that runs at startup.
#[event(start)]
pub fn start() {
    utils::set_panic_hook();
}

// The main entry point for requests.
#[event(fetch)]
pub async fn main(req: Request, env: Env, _ctx: worker::Context) -> Result<Response> {
    log_request(&req);
    utils::set_panic_hook();
    let data = SharedData::new(&req).unwrap();
    let router = Router::with_data(data);
    router
        /* Root Routes */
        .get("/", |_, _| Response::ok("Hello from Workers!"))
        /* Block Routes */
        .get_async("/block/get/:cid", handlers::block::get)
        // .post_async("/block/put", handlers::block::post)
        // .head_async("/block/stat/:cid", handlers::block::head)
        // .delete_async("/block/rm/:cid", handlers::block::delete)

        // .post_async("/form/:field", |mut req, ctx| async move {
        //     if let Some(name) = ctx.param("field") {
        //         let form = req.form_data().await?;
        //         match form.get(name) {
        //             Some(FormEntry::Field(value)) => {
        //                 return Response::from_json(&json!({ name: value }))
        //             }
        //             Some(FormEntry::File(_)) => {
        //                 return Response::error("`field` param in form shouldn't be a File", 422);
        //             }
        //             None => return Response::error("Bad Request", 400),
        //         }
        //     }

        //     Response::error("Bad Request", 400)
        // })
        // .get("/worker-version", |_, ctx| {
        //     let version = ctx.var("WORKERS_RS_VERSION")?.to_string();
        //     Response::ok(version)
        // })
        .run(req, env)
        .await
} 
