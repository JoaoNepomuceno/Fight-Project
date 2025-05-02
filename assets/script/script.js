let log = new Log(document.querySelector('.log'))
let l1 = new littleMonster ('Coringa');
let l2 = new bigMonster ('Thanos');

let luta = new Stage(l1,l2,document.querySelector('#hero'), document.querySelector('#monster'), log);

luta.start();
