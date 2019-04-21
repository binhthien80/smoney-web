import React from 'react'
import { Card, InputStyled, DatePickerStyled, IconStyled, ButtonStyled,UlStyled, LiStyled } from './styled'
import { Row, Col } from 'antd'
import Select from 'react-select'
import Theme from '../../theme'

const options = [
  { value: 'salary', label: 'Lương về' },
  { value: 'homemoney', label: 'Xin tiền mẹ' },
  { value: 'gift', label: 'Nhận quà sinh nhật' },
]
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: 'black',
  }),
  
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1
    const transition = 'opacity 300ms'

    return { ...provided, opacity, transition }
  },
}
export default class Earning extends React.Component {
  state = {
    selectedOption: null,
  }
  handleChange = selectedOption => {
    this.setState({ selectedOption })
    console.log(`Option selected:`, selectedOption)
  }
  render() {
    return (
      <Row gutter={16}>
        <Col span={12}>
          <Card>
          <p>Add Transaction</p>
            <IconStyled type="question-circle"  />
            <Select
              defaultValue={options[2]}
              label="Single select"
              options={options}
              theme={theme => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                },
              })}
              styles={customStyles}
            />
            <IconStyled type="dollar" />
            <InputStyled placeholder="0" />
            <IconStyled type="edit" />
            <InputStyled placeholder="Note" />
            <IconStyled type="schedule" />
            <DatePickerStyled
              style={{ width: '100%' }}
              popupStyle={{
                borderRadius: '0px !important',
                background: "white"
              }}
            />
            <ButtonStyled type="primary" block>Add</ButtonStyled>
          </Card>
        </Col>
        <Col span={12}>
          <Card >
          <p>History Transaction</p>
          <UlStyled class="bullet-line-list">
										<LiStyled>
											<p>Nhận được quà</p>
											<p>+500,000đ </p>
											<p class="text-muted mb-4">
												<i class="mdi mdi-clock-outline"></i>
												1 hours ago.
											</p>
										</LiStyled>
										<LiStyled>
											<p>Nhận lương</p>
											<p>+500,000đ</p>
											<p class="text-muted mb-4">
												<i class="mdi mdi-clock-outline"></i>
												2 hours ago.
											</p>
										</LiStyled>
										<LiStyled>
											<p>Mua rau</p>
											<p>-300,000đ </p>
											<p class="text-muted">
												<i class="mdi mdi-clock-outline"></i>
												3 hours ago.
											</p>
										</LiStyled>
									</UlStyled>
          </Card>
        </Col>
      </Row>
    )
  }
}
