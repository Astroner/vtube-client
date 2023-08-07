import { VTubeClient } from "../src";

const start = async () => {
    const client = new VTubeClient("http://localhost:4040/");

    console.log(await client.search.queryMusic("Imagine Dragons"));
}

start();