import {useState} from 'react';

interface SearchBarProps{
	onSearch: (query: String) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({onSearch}) =>{
	const [query, setQuery] = useState<String>('');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
		setQuery(event.target.value);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
		event.preventDefault();
		onSearch(query);
	};

	return (
		<div className='Search'>
		<form onSubmit={handleSubmit} style={{display: 'flex', alignItems: 'center',maxWidth: '400px', margin: '0 auto'}}>
		<input
			type='text'
			value={query}
			onChange={handleChange}
			placeholder='Search...'
			style={{padding:'10px', flex: '1', marginRight:'10px',borderRadius: '55px', marginBottom: '10px',
				color:'#000000'
			}}

		/>
		<button type='submit'>
			Search
		</button>
	</form>
	</div>
	);

};

export default SearchBar;
