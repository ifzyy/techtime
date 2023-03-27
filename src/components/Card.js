import React from 'react'

const Card = (props) => {
    const { design, image, views, views_plus, header, time, lessons, profile__image, profile__name, price } = props
    return (
        <div className="card">
            <div className="card__image"><img src={image} alt="" /> </div>
            <div className="card__tag">
                <span className="design">{design}</span>
                <span className="views">{views}<img src="images/star.png" alt="" /> {views_plus}</span>
            </div>
            <h2 className="card__head">
                {header}
            </h2>
            <div className="card__details">
                <span className="time"><img src="images/schedule.png" alt="" /> {time}</span>
                <span className="lessons"><img src="images/menu_book.png" alt="" /> {lessons}</span>
            </div>
            <div className="card__price">
                <span className="profile"><img src={profile__image} alt="" />{profile__name}</span>
                <span className="price">{price}</span>
            </div>
        </div>
    )
}

export default Card
