import { generateClient } from 'aws-amplify/api';
import { Amplify } from 'aws-amplify';
import booksData from '../src/book_data.json';

// // Amplifyの設定を読み込む
// import awsconfig from '../src/aws-exports';
// Amplify.configure(awsconfig);

// GraphQLクライアントの生成
const client = generateClient();

// GraphQLミューテーションをインポート
import { createBook } from '../src/graphql/mutations';

async function seedDatabase() {
  try {
    for (const book of booksData as any) {
      try {
        await client.graphql({
          query: createBook,
          variables: { 
            input: {
              ...book,
              votes: 0 // 明示的に0を設定
            }
          }
        });
        console.log(`Book inserted: ${book.title}`);
      } catch (insertError) {
        console.error(`Error inserting book ${book.title}:`, insertError);
      }
    }
    console.log('データ投入完了');
    process.exit(0);
  } catch (error) {
    console.error('データ読み込みエラー:', error);
    process.exit(1);
  }
}

// スクリプトの実行
seedDatabase();