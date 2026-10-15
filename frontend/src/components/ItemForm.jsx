import { useState, useEffect } from "react";

function ItemForm({ initialValues, onSubmit, submitText }) {
  const [formData, setFormData] = useState({
    name: initialValues?.name || "",
    category: initialValues?.category || "",
    price: initialValues?.price ?? "",
    discountPercentage: initialValues?.discountPercentage ?? "",
    description: initialValues?.description || "",
    imageUrl: initialValues?.imageUrl || "",
  });

  useEffect(() => {
    if (initialValues) {
      setFormData({
        name: initialValues.name || "",
        category: initialValues.category || "",
        price: initialValues.price ?? "",
        discountPercentage: initialValues.discountPercentage ?? "",
        description: initialValues.description || "",
        imageUrl: initialValues.imageUrl || "",
      });
    }
  }, [initialValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      price: Number(formData.price),
      discountPercentage:
        formData.discountPercentage === ""
          ? 0
          : Number(formData.discountPercentage),
    });
  };

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <h2>{submitText}</h2>

      <label htmlFor="name">Item Name</label>
      <input
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="e.g. Wireless Headphones"
        required
      />

      <label htmlFor="category">Category</label>
      <input
        id="category"
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="e.g. Electronics"
        required
      />

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="price">Price ($)</label>
          <input
            id="price"
            type="number"
            name="price"
            min="0"
            step="0.01"
            value={formData.price}
            onChange={handleChange}
            placeholder="0.00"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="discountPercentage">Discount Percentage</label>
          <input
            id="discountPercentage"
            type="number"
            name="discountPercentage"
            min="0"
            max="100"
            step="1"
            value={formData.discountPercentage}
            onChange={handleChange}
            placeholder="e.g. 10"
          />
        </div>
      </div>

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        rows="4"
        value={formData.description}
        onChange={handleChange}
        placeholder="Enter item description..."
        required
      />

      <label htmlFor="imageUrl">Image URL</label>
      <input
        id="imageUrl"
        name="imageUrl"
        value={formData.imageUrl}
        onChange={handleChange}
        placeholder="https://example.com/item.jpg"
      />

      <button className="btn primary" type="submit">
        {submitText}
      </button>
    </form>
  );
}

export default ItemForm;
