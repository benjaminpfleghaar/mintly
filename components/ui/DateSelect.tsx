"use client";

import styled from "styled-components";
import ErrorMessage from "@/components/ui/ErrorMessage";

export default function DateSelect({ value }: { value?: string }) {
	const currentDate = new Date();
	const day = Number(value?.split("-")[2]) || currentDate.getDate();
	const month = Number(value?.split("-")[1]) || currentDate.getMonth() + 1;
	const year = Number(value?.split("-")[0]) || currentDate.getFullYear();

	return (
		<StyledDiv>
			<StyledSpan id="date">Date</StyledSpan>
			<StyledFieldset aria-labelledby="date">
				<StyledSelect name="day" aria-label="Day" defaultValue={day} aria-describedby="date-error" aria-invalid="true">
					<option disabled>Please select a day</option>
					<option>1</option>
					<option>2</option>
					<option>3</option>
					<option>4</option>
					<option>5</option>
					<option>6</option>
					<option>7</option>
					<option>8</option>
					<option>9</option>
					<option>10</option>
					<option>11</option>
					<option>12</option>
					<option>13</option>
					<option>14</option>
					<option>15</option>
					<option>16</option>
					<option>17</option>
					<option>18</option>
					<option>19</option>
					<option>20</option>
					<option>21</option>
					<option>22</option>
					<option>23</option>
					<option>24</option>
					<option>25</option>
					<option>26</option>
					<option>27</option>
					<option>28</option>
					<option>29</option>
					<option>30</option>
					<option>31</option>
				</StyledSelect>
				<StyledSelect name="month" aria-label="Month" defaultValue={month} aria-describedby="date-error" aria-invalid="true">
					<option disabled>Please select a month</option>
					<option>1</option>
					<option>2</option>
					<option>3</option>
					<option>4</option>
					<option>5</option>
					<option>6</option>
					<option>7</option>
					<option>8</option>
					<option>9</option>
					<option>10</option>
					<option>11</option>
					<option>12</option>
				</StyledSelect>
				<StyledSelect name="year" aria-label="Year" defaultValue={year} aria-describedby="date-error" aria-invalid="true">
					<option disabled>Please select a year</option>
					<option>2024</option>
					<option>2023</option>
					<option>2022</option>
					<option>2021</option>
					<option>2020</option>
					<option>2019</option>
					<option>2018</option>
					<option>2017</option>
					<option>2016</option>
					<option>2015</option>
					<option>2014</option>
				</StyledSelect>
			</StyledFieldset>
			<ErrorMessage id="date-error" message="Please select a date" />
		</StyledDiv>
	);
}
const StyledDiv = styled.div`
	display: flex;
	gap: var(--spacing-8);
	flex-direction: column;
`;
const StyledSpan = styled.span`
	color: var(--color-gray-50);
	font: var(--font-regular-12);
`;
const StyledFieldset = styled.fieldset`
	border: none;
	display: flex;
	gap: var(--spacing-8);
`;
const StyledSelect = styled.select`
	flex-grow: 1;
	height: var(--spacing-48);
	font: var(--font-regular-14);
	padding-left: var(--spacing-16);
	border-radius: var(--spacing-8);
	border: 1px solid var(--color-gray-80);
	background: url("/images/Down.svg") center right 14px / 20px 20px no-repeat;
`;
