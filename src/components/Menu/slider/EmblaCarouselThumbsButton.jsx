import React from 'react'

export const Thumb = ({ selected, imgSrc, onClick }) => {
  return (
    <div
      className={'embla-thumbs__slide'.concat(
        selected ? ' embla-thumbs__slide--selected' : ''
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__button"
      >
        <img
          className="embla-thumbs__slide__img"
          src={imgSrc}
          alt=""
        />
      </button>
    </div>
  )
}
