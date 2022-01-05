import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCategory } from 'features/category/categorySlice'

const useCategory = (category) => {
  const dispatch = useDispatch()
  const categoryList = useSelector((state) => state.category.categoryList)
  useEffect(() => !categoryList.length && dispatch(fetchCategory()), [dispatch, categoryList.length])
  const categoryName = categoryList.find((cat) => cat.id === category)?.c_name
  return categoryName
}

export default useCategory
