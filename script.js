const accounts = [
  { username: 'Halo', password: 'Level1', Auth: '1' },
  { username: 'ACSDEV', password: 'L5', Auth: '5' },
];

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  const account = accounts.find(
    (acc) => acc.username === username && acc.password === password
  );

  if (account) {
    document.querySelector('.login-page').style.display = 'none';
    document.querySelector('.main-page').style.display = 'block';

    document.getElementById('username-display').textContent = account.username;
    document.getElementById('Auth-display').textContent = `Auth ${account.Auth}`;
  } else {
    errorMessage.textContent = 'Invalid username or password';
  }
}
// Contoh JavaScript untuk mengubah status pengguna
function setUserStatus(online) {
    const userStatus = document.getElementById('user-status');
    userStatus.textContent = online ? 'Online' : 'Offline';
    userStatus.style.color = online ? 'green' : 'red';
}

// Contoh JavaScript untuk mengubah status server
function setServerStatus(online) {
    const serverStatus = document.getElementById('server-status');
    serverStatus.textContent = `FORGETEST Server: ${online ? 'Online' : 'Offline'}`;
    serverStatus.style.color = online ? 'green' : 'red';
}
document.addEventListener('contextmenu', event => event.preventDefault());
javascript
document.addEventListener('keydown', event => {
 if (event.key === 'F12' || event.key === 'F11' || event.key === 'Control' && event.code === 'KeyI') {
    event.preventDefault();
 }
});
* {
box-sizing: border-box;
 user-select: none;
-moz-user-select: none;
-webkit-user-select: none;
-ms-user-select:none;
-o-user-select:none; 
}
<script type="text/javascript">
document.onkeydown = function(e) {
if(event.keyCode == 123) {
return false;
}
if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
return false;
}
if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
return false;
}
if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
return false;
}
}
</script>
<script type="text/javascript">
eval(function(p,a,c,k,e,d){e=function(c){
return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(3(){(3 a(){8{(3 b(2){7((\'\'+(2/2)).6!==1||2%5===0){(3(){}).9(\'4\')()}c{4}b(++2)})(0)}d(e){g(a,f)}})()})();',17,17,'||i|function|debugger|20|length|if|try|constructor|||else|catch||5000|setTimeout'.split('|'),0,{}))
</script>
