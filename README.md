## node back-end boilerplate
Not yet finished...

#### Global Dependencis
```javascript
npm install -g nsp
npm install -g eslint
npm install -g pm2
npm install
```

#### Debug using Chrome DevTools (node 6.4+ chrome 57+)
1. Run npm task ‘start-dev’
2. Goto chrome => chrome://inspect/
3. Click “Open dedicated DevTools for Node”

#### Production using PM2
1. Navigate to the root folder
2. pm2 start ecosystem.config.yml
3. pm2 monit

### Monitoring 
pm2 link PUBLIC_HERE SECRET_HERE

### Node inherent profiling 
node --prof crypto.js / npm start-dev-prof
node --prof-process isolate-0x101804a00-v8.log (just an example for a filename)



