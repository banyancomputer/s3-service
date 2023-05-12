mod util;

#[test]
fn get() {
    let _ = util::get("block/get/test", |r| r);
}