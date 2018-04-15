export default {
  bucket: {
    slug: "process.env.COSMIC_BUCKET || 'todo-app", // add your Bucket slug here
    type_slug: "tasks",
    read_key: process.env.COSMIC_READ_KEY, // add read key if added to Cosmic JS > Your Bucket > Settings
    write_key: process.env.COSMIC_WRITE_KEY // add write key if added to Cosmic JS > Your Bucket > Settings
  }
};
