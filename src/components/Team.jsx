import React from 'react'


const Team = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Frontend Developer',
      photo: 'https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D',
      description: 'John is an experienced frontend developer with a passion for creating user-friendly interfaces.'
    },
    {
      name: 'Jane Smith',
      role: 'Backend Developer',
      photo: 'https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D',
      description: 'Jane is a skilled backend developer who specializes in building robust and scalable server-side applications.'
    },
    {
      name: 'Mike Johnson',
      role: 'UI/UX Designer',
      photo: 'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww',
      description: 'Mike is a creative UI/UX designer with an eye for detail and a focus on user-centered design principles.'
    }
  ];

  return (
    <>
      <div className="team-container">
        <h2 className='text-6xl flex justify-center font-bold my-20'>OUR TEAM</h2>
        <div className="team-members flex justify-center gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member w-96">
              <img 
                src={member.photo} 
                alt={member.name} 
                className="member-photo" 
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  objectFit: 'cover'
                }}
              />
              <h3>{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p className="member-description">{member.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="team-container my-20">
        <div className="team-members flex justify-center gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member w-96">
              <img 
                src={member.photo} 
                alt={member.name} 
                className="member-photo" 
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  objectFit: 'cover'
                }}
              />
              <h3>{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p className="member-description">{member.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="team-container my-20">
        <div className="team-members flex justify-center gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member w-96">
              <img 
                src={member.photo} 
                alt={member.name} 
                className="member-photo" 
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  objectFit: 'cover'
                }}
              />
              <h3>{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p className="member-description">{member.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="team-container my-20">
        <div className="team-members flex justify-center gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member w-96">
              <img 
                src={member.photo} 
                alt={member.name} 
                className="member-photo" 
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  objectFit: 'cover'
                }}
              />
              <h3>{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p className="member-description">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}


export default Team
