import React from 'react'


const Users = ({loading,users}) => {
    const mainstyle={display:'grid',
    gridTemplateColumns: 'repeat('+2+','+ 2+'fr)',};
    return loading ? (   
          <div id="main" align="center">
            <img src="http://www.freepsdhtml.com/wp-content/uploads/2017/09/19.gif"alt="" className="loader"/>
          </div>
        ) : 
        (
          <div id="main" style={mainstyle}>
    
          {users.map(user =>
                      <div className="profile_cont" key={user.id}>
                        { console.log(user) }
                        
                       <img src={user.avatar} alt={user.avatar} className="avatar"></img>
                       <h1 className="Name">{user.first_name} {user.last_name}</h1>
                       <p className="Email">{user.email}</p>
                       <p className="UserId">User ID: {user.id}</p>
                     </div>
                   )
          }
        </div>
        )}
export default Users;