import { useState } from 'react';
import axios from 'axios';

const CreateBlog = () => {
  const [formData, setFormData] = useState({
    author: '',
    authorImg: '',
    authorOccupation: '',
    title: '',
    description: '',
    details: [{ point: '', description: '' }],
    imageUrl: ''
  });
  const token = localStorage.getItem('adminToken');
    if (!token) {
        window.location.href = '/';
    }

  const handleChange = (e:any, index:any) => {
    const { name, value } = e.target;
    const updatedDetails = formData.details.map((detail, i) => {
      if (i === index) {
        return { ...detail, [name]: value };
      }
      return detail;
    });
    setFormData(prevData => ({ ...prevData, details: updatedDetails }));
  };

  const addDetail = () => {
    setFormData(prevData => ({
      ...prevData,
      details: [...prevData.details, { point: '', description: '' }]
    }));
  };

  const removeDetail = (index:any) => {
    const updatedDetails = formData.details.filter((_, i) => i !== index);
    setFormData(prevData => ({ ...prevData, details: updatedDetails }));
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      // Send formData to the API
      await axios.post('http://localhost:8080/api/posts/', formData);
      // Optionally, you can handle success, reset the form, or redirect the user
      console.log('Blog post created successfully!');
      alert('Post Created Successfully');
      // Reset the form after successful submission
      setFormData({
        author: '',
        authorImg: '',
        authorOccupation: '',
        title: '',
        description: '',
        details: [{ point: '', description: '' }],
        imageUrl: ''
      });
    } catch (error) {
      // Handle errors, such as displaying an error message to the user
      console.error('Error creating blog post:', error);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-[4rem] shadow-xl p-[2rem] ">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label className="text-gray-800 font-bold ">Author</label>
          <input type="text" name="author" value={formData.author} onChange={(e) => setFormData(prevData => ({ ...prevData, author: e.target.value }))} className="border border-gray-400 px-3 py-2 rounded-md focus:outline-none focus:border-black " required />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-800 font-bold">Author Image URL</label>
          <input type="text" name="authorImg" value={formData.authorImg} onChange={(e) => setFormData(prevData => ({ ...prevData, authorImg: e.target.value }))} className="border border-gray-400 px-3 py-2 rounded-md focus:outline-none focus:border-black" required />
        </div>
        <div className="flex flex-col ">
          <label className="text-gray-800 font-bold">Author Occupation</label>
          <input type="text" name="authorOccupation" value={formData.authorOccupation} onChange={(e) => setFormData(prevData => ({ ...prevData, authorOccupation: e.target.value }))} className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-black" required />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-800 font-bold">Title</label>
          <input type="text" name="title" value={formData.title} onChange={(e) => setFormData(prevData => ({ ...prevData, title: e.target.value }))} className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-black" required />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-800 font-bold">Description</label>
          <textarea name="description" value={formData.description} onChange={(e) => setFormData(prevData => ({ ...prevData, description: e.target.value }))} className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-black" required />
        </div>
        {formData.details.map((detail, index) => (
          <div key={index} className="flex flex-col">
            <label className="text-gray-800 font-bold ">Detail Point</label>
            <input type="text" name="point" value={detail.point} onChange={(e) => handleChange(e, index)} className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-black" required />
            <label className="text-gray-800 font-bold">Detail Description</label>
            <textarea name="description" value={detail.description} onChange={(e) => handleChange(e, index)} className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-black" required />
            <button type="button" onClick={() => removeDetail(index)} className="text-gray-700 mt-4 bg-red-500 px-4 py-2 rounded-md hover:bg-red-700">Remove Detail</button>
          </div>
        ))}
        <button type="button" onClick={addDetail} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">Add Detail</button>
        <div className="flex flex-col">
          <label className="text-gray-800 font-bold">Image URL</label>
          <input type="text" name="imageUrl" value={formData.imageUrl} onChange={(e) => setFormData(prevData => ({ ...prevData, imageUrl: e.target.value }))} className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-black" />
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700">Submit</button>
      </form>
    </div>
  );
};

export default CreateBlog;
