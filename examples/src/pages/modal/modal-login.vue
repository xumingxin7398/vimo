<template>
    <Page>
        <Header>
            <Toolbar>
                <Buttons end slot="buttons">
                    <Button role="bar-button" type="solid" @click="closeModal">
                        Close
                    </Button>
                </Buttons>
                <Title>Login</Title>
            </Toolbar>
        </Header>
        <Content padding>
            <List>
                <ListHeader>请输入</ListHeader>
                <Item>
                    <Icon name="person" slot="item-left"></Icon>
                    <Label>用户名</Label>
                    <Input type="text" v-model="username" clearInput></Input>
                </Item>
                <Item>
                    <Icon name="key" slot="item-left"></Icon>
                    <Label>密码</Label>
                    <Input type="password" v-model="password" clearInput></Input>
                </Item>
            </List>

            <Grid>
                <Row justify-content-center>
                    <Column col-6>
                        <Button block @click="login">登录</Button>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <p text-center>点击查看 <span class="secret" @click="secret">隐私政策</span></p>
                    </Column>
                </Row>
            </Grid>
        </Content>
    </Page>
</template>
<style lang="scss">
    .login {
        border: 1px solid #ddd;
        border-radius: 5px;
        padding: 30px 10px;
    }

    .secret {
        text-decoration: underline;
        color: #387ef5;
    }
</style>
<script type="text/javascript">
  import modalSecretComponent from './modal-secret.vue'
  export default{
    data () {
      return {
        username: this.$options.$data.username,
        password: this.$options.$data.password
      }
    },
    props: {},
    watch: {},
    computed: {},
    methods: {
      secret() {
        this.$modal.present({
          component: modalSecretComponent,
          showBackdrop: true,
          enableBackdropDismiss: false
        })
      },
      login () {
        this.$modal.dismiss({
          username: this.username,
          password: this.password
        })
      },
      closeModal () {
        this.$modal.dismiss()
      }
    },
    created () {},
    mounted () {},
    activated () {},
  }
</script>
