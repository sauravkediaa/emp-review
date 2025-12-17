function StarRating({rating, setRating}) {
    return (
        <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
                <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "32px",
                        color: "gold"
                    }}
                >
                    {star <= rating ? "★" : "☆"}
                </button> 
            ))}
        </div>
    )
}

export default StarRating;