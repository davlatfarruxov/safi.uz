import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

async function testAPI() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB connected');

    const db = mongoose.connection.db;
    
    // Test collections
    const collections = await db.listCollections().toArray();
    console.log('\n📁 Collections:', collections.map(c => c.name));

    // Test products
    const products = await db.collection('products').find({}).limit(3).toArray();
    console.log('\n📦 Products count:', await db.collection('products').countDocuments());
    console.log('First product:', products[0]?.name);

    // Test categories
    const categories = await db.collection('categories').find({}).toArray();
    console.log('\n📁 Categories count:', categories.length);
    console.log('Categories:', categories.map(c => c.name?.uz || c.name));

    // Test blogs
    const blogs = await db.collection('blogs').find({}).toArray();
    console.log('\n📝 Blogs count:', blogs.length);

    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

testAPI();
