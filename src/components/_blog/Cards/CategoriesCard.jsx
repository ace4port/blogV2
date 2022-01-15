import React from 'react'
import useCategory from 'hooks/useCategory'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategory } from 'features/category/categorySlice'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const CategoriesCard = () => {
  const dispatch = useDispatch()
  const categories = useSelector((state) => state.category.categoryList)

  useEffect(() => !categories.length && dispatch(fetchCategory()), [dispatch, categories.length])

  return (
    <div className="card categoriesCard">
      <h4>Browse Categories</h4>

      <div className="flex-col">
        {categories.map((category) => (
          <Link to={`/category/${category.id}`} key={category.id}>
            {category.c_name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoriesCard
