/**
 * Created by lsq on 2018/1/22.
 */
function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Jane User";

document.body.innerHTML = greeter(user);