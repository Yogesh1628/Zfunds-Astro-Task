import "./FileUpload.css";

const FileUpload = ({ heading, text, labelText, image, setImage, field }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validTypes = ["image/jpeg", "image/png", "image/jpg"];
      const maxSize = 1 * 1024 * 1024; // 1 MB in bytes

      if (!validTypes.includes(file.type)) {
        alert("Only .jpeg, .jpg, and .png files are allowed.");
        return;
      }

      if (file.size > maxSize) {
        alert("File size must be less than 1 MB.");
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemove = () => {
    fetch("http://localhost:5000/api/update-images", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ [field]: null }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(() => {
        setImage(null);
      })
      .catch((error) => console.error("Error removing image:", error));
  };

  return (
    <div className="file-upload-container">
      <div className="file-upload-label">
        <p className="file-upload-title">{heading}</p>
        <p className="file-upload-subtitle">{text}</p>
      </div>
      <div className="file-upload-area">
        {image ? (
          <div className="file-preview-container">
            <img src={image} alt="Uploaded" className="file-image-preview" />
            <button className="file-remove-button" onClick={handleRemove}>
              &#10006;
            </button>
          </div>
        ) : (
          <label className="file-label">
            <input
              type="file"
              accept=".jpeg, .png, .jpg"
              className="file-input"
              onChange={handleFileChange}
            />
            <div className="file-dashed-box">{labelText}</div>
          </label>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
