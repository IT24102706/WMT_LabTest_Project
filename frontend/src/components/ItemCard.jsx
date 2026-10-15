import { Link } from "react-router-dom";

function ItemCard({ item, onDelete }) {
  const discount = Number(item.discountPercentage) || 0;
  const price = Number(item.price) || 0;
  const hasDiscount = discount > 0;
  const discountedPrice = hasDiscount
    ? (price - (price * discount) / 100).toFixed(2)
    : price.toFixed(2);

  const fallbackImage =
    "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22400%22%20height%3D%22220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20220%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder%20text%20%7B%20fill%3A%2394a3b8%3Bfont-weight%3Abold%3Bfont-family%3AInter%2Csystem-ui%2Csans-serif%3Bfont-size%3A20pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23e2e8f0%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2235%25%22%20y%3D%2253%25%22%3ENo%20Image%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";

  return (
    <div className="card">
      <div className="card-image-wrapper">
        <img
          src={item.imageUrl || fallbackImage}
          alt={item.name}
          className="card-image"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = fallbackImage;
          }}
        />
        {hasDiscount && (
          <span className="badge discount-badge">{discount}% OFF</span>
        )}
      </div>

      <div className="card-body">
        <h3 className="card-title">{item.name}</h3>
        <p className="card-category">
          <span className="pill">{item.category}</span>
        </p>

        <div className="card-pricing">
          {hasDiscount ? (
            <>
              <p className="price original-price">
                <strong>Price:</strong> <span className="strikethrough">${price.toFixed(2)}</span>
              </p>
              <p className="discount-label">
                <strong>Discount Percentage:</strong> {discount}%
              </p>
              <p className="price final-price">
                <strong>Final Price:</strong> ${discountedPrice}
              </p>
            </>
          ) : (
            <>
              <p className="price final-price">
                <strong>Price:</strong> ${price.toFixed(2)}
              </p>
              <p className="discount-label">
                <strong>Discount Percentage:</strong> 0%
              </p>
            </>
          )}
        </div>

        <p className="card-description">{item.description}</p>
      </div>

      <div className="card-actions">
        <Link className="btn secondary" to={`/edit-item/${item._id}`}>
          Edit
        </Link>
        <button className="btn danger" onClick={() => onDelete(item._id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
