import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";
import { styled } from "styled-components";
import Row from "../ui/Row"
const TopContent = styled.div`
  margin-bottom: 5px;
  padding:1.2rem;
  font-weight:bold;
  font-size:2rem;
`

export default function Settings() {
  return (
    <div>
      <TopContent>Update Hotel Setting</TopContent>
      <Row>
      <UpdateSettingsForm/>
      </Row>
    </div>
  )
}
