	var Service = require('node-windows').Service;

     var svc = new Service({
          name:'ServerNodeFour',
          description: 'Site Four',
          script: 'C:\\Users\\henri\\Desktop\\Dev\\FourAdm\\app.js'
     });


     svc.on('install',function(){
                svc.start();
     });

     svc.install();
