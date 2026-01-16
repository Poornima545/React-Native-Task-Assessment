import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchPosts } from '../services/api';

const STORAGE_KEY = 'SEARCH_TEXT';

export default function usePosts() {
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [refreshing, setRefreshing] = useState(false);

    const loadPosts = async () => {
        try {
            setError('');
            const data = await fetchPosts();
            setPosts(data);
            filterPosts(search, data);
        } catch (err) {
            setError('Unable to fetch posts. Check your network connection.');
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    };

    const filterPosts = (text, list = posts) => {
        const filtered = list.filter(post =>
            post.title.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredPosts(filtered);
    };

    const handleSearch = async text => {
        setSearch(text);
        filterPosts(text);
        await AsyncStorage.setItem(STORAGE_KEY, text);
    };

    const loadSavedSearch = async () => {
        const saved = await AsyncStorage.getItem(STORAGE_KEY);
        if (saved) {
            setSearch(saved);
        }
    };

    useEffect(() => {
        loadSavedSearch();
        loadPosts();
    }, []);

    useEffect(() => {
        filterPosts(search);
    }, [posts]);

    return {
        search,
        filteredPosts,
        loading,
        error,
        refreshing,
        handleSearch,
        loadPosts,
        setRefreshing,
    };
}
