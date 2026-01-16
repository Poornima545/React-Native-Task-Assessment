import {
    View,
    Text,
    TextInput,
    FlatList,
    ActivityIndicator,
    StyleSheet,
} from 'react-native';
import PostCard from './components/PostCard';
import usePosts from './hooks/usePosts';

export default function App() {
    const {
        search,
        filteredPosts,
        loading,
        error,
        refreshing,
        handleSearch,
        loadPosts,
        setRefreshing,
    } = usePosts();

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.center}>
                <Text>{error}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Search by title..."
                value={search}
                onChangeText={handleSearch}
                style={styles.input}
            />

            {filteredPosts.length === 0 ? (
                <Text style={styles.empty}>No posts found.</Text>
            ) : (
                <FlatList
                    data={filteredPosts}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <PostCard title={item.title} body={item.body} />
                    )}
                    refreshing={refreshing}
                    onRefresh={() => {
                        setRefreshing(true);
                        loadPosts();
                    }}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    input: {
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 8,
        marginBottom: 12,
    },
    empty: {
        textAlign: 'center',
        marginTop: 40,
        fontSize: 16,
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
