"use client";

import { categories } from "@/data/categories";

export default function TransactionForm() {
	return (
		<form>
			<div className="form-section">
				<label htmlFor="amount">Amount</label>
				<input id="amount" type="text" name="amount" placeholder="0.00" />
				<span className="error-message">This field can&apos;t be empty</span>
			</div>
			{/*---*/}
			<fieldset className="form-section">
				<button type="button">$50</button>
				<button type="button">$100</button>
				<button type="button">$500</button>
			</fieldset>
			{/*---*/}
			<div className="form-section">
				<label htmlFor="name">Name</label>
				<input id="name" type="text" name="name" placeholder="Please enter a name" />
			</div>
			{/*---*/}
			<div className="form-section">
				<label htmlFor="category">Category</label>
				<select name="category" id="category" defaultValue="Please select a category">
					<option disabled>Please select a category</option>
					{categories.map((category) => (
						<option key={category} value={category}>
							{category}
						</option>
					))}
				</select>
			</div>
			{/*---*/}
			<fieldset className="form-section">
				<legend>Type</legend>
				<div>
					<label htmlFor="income">
						<input id="income" type="radio" name="type" value="Income" defaultChecked />
						Income
					</label>
				</div>
				<div>
					<label htmlFor="expense">
						<input id="expense" type="radio" name="type" value="Expense" />
						Expense
					</label>
				</div>
			</fieldset>
			{/*---*/}
			<div className="form-section">
				<label htmlFor="date">Date</label>
				<input id="date" type="date" name="date" defaultValue="2024-11-25" />
			</div>
			{/*---*/}
			<div className="form-actions">
				<button type="submit">Save</button>
				<button type="button">Cancel</button>
			</div>
		</form>
	);
}
