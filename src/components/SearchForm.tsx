import { memo } from "react";
import { Formik, Form, Field } from "formik";
import { SearchCriteria } from "../types/book";

interface SearchFormProps {
  onSearch: (criteria: SearchCriteria) => void;
}

const SearchInput = memo(
  ({ name, placeholder }: { name: string; placeholder: string }) => (
    <Field
      type="text"
      name={name}
      placeholder={placeholder}
      className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
  )
);

function SearchForm({ onSearch }: SearchFormProps) {
  const initialValues: SearchCriteria = {
    isbn: "",
    title: "",
    creator: "",
    publisher: "",
    description: "",
    language: "",
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <Formik initialValues={initialValues} onSubmit={onSearch}>
        {({ resetForm, submitForm }) => (
          <Form>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ISBN
                </label>
                <SearchInput name="isbn" placeholder="ISBNで検索..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  タイトル
                </label>
                <SearchInput name="title" placeholder="タイトルで検索..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  作者
                </label>
                <SearchInput name="creator" placeholder="作者で検索..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  出版社
                </label>
                <SearchInput name="publisher" placeholder="出版社で検索..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  説明
                </label>
                <SearchInput name="description" placeholder="説明文で検索..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  言語
                </label>
                <SearchInput name="language" placeholder="言語で検索..." />
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                         transition-colors"
              >
                検索
              </button>
              <button
                type="button"
                onClick={() => {
                  resetForm();
                  submitForm();
                }}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600
                         focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50
                         transition-colors"
              >
                リセット
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default memo(SearchForm);
