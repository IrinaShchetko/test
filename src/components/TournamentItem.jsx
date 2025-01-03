import React from 'react'
import '../../styles/TournamentItem.less'

const TournamentItem = ({ name, title, status, score }) => {
  const today = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
  })
  const currentTime = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  })

  const handleButtonClick = () => {}

  return (
    <div className='tournament-item'>
      <div className={`status ${status === 'Canceled' ? 'cansel-status' : ''}`}>
        {status}
      </div>
      <div className='details'>
        <h3 className='title-1'>{title}</h3>
        <h4 className='title-2'>{name}</h4>
        <p className='score'>{score}</p>
        <div className='date-info'>
          <svg
            width='10'
            height='10'
            viewBox='0 0 10 10'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M10 5C10 7.76142 7.76142 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.76142 0 10 2.23858 10 5ZM4 1.5C4 1.22386 4.22386 1 4.5 1C4.77614 1 5 1.22386 5 1.5V5H8.5C8.77614 5 9 5.22386 9 5.5C9 5.77614 8.77614 6 8.5 6H4.5C4.22386 6 4 5.77614 4 5.5V1.5Z'
              fill='white'
            />
          </svg>
          {currentTime}, {today}
        </div>
      </div>

      <div className='action'>
        <button
          className={status === 'Canceled' ? 'cancel-btn' : 'register-btn'}
          onClick={handleButtonClick}
        >
          {status === 'Canceled' ? 'Cancelled' : 'Join table'}
        </button>
      </div>
    </div>
  )
}

export default TournamentItem
