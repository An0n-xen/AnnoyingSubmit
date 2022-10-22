// Getting Login buttom from form
const login = document.forms[0][2];

let thres = 380

login.addEventListener('mouseover',(event)=>{
    // login.style.right = event.x + 100 +  'px';
        
    r_login = login.getBoundingClientRect().right;
    l_login = login.getBoundingClientRect().left;

    m_login = Math.round((r_login - l_login) /2 );

    // console.log("Mouse event: " + event.x);
    
    if(event.x <= l_login+m_login){
        login.style.left = l_login + m_login + 50+ 'px';
    }  

    if(event.x >= l_login+m_login){
        login.style.left = l_login - (m_login + 50) + 'px';
    }
})