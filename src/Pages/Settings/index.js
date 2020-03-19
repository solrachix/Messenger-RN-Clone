import React from 'react';

import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import BigAvatar from '$root/components/StatusAvatar/BigAvatar';

import { Container, BigAvatarContainer, Ul, Li, Icon, IconContainer, Title, Text } from './styles';

export default function Settings({ navigation }) {

  return (
    <Container>

      <Ul>
        <BigAvatarContainer>
          <BigAvatar text="Carlos Miguel" avatar='https://avatars1.githubusercontent.com/u/57706806?s=600' />
        </BigAvatarContainer>
      </Ul>

      <Ul>
      
        <Li // Modo Escuro
          onPress={()=> {}}
          icon={
            <IconContainer>
              <Icon name="md-moon" size={24} />
            </IconContainer>
          }
          avatarSize={24}
          border={false}
          titleContainer={{
              firstTitle: "Modo Escuro",
          }}
        />

        <Li // solicitacoes de mensagens
          onPress={()=> {}}
          icon={
            <IconContainer>
              <AntDesign name="message1" size={22}  color="#fff"/>
            </IconContainer>
          }
          avatarSize={24}
          border={false}
          titleContainer={{
              firstTitle: "Solicitações de mensagens",
          }}
        />

        <Title>Perfil</Title>{/** PERFIL */}
        <Li // Status online
          onPress={()=> {}}
          icon={
            <IconContainer>
              <Icon name="md-moon" size={24} />
            </IconContainer>
          }
          avatarSize={24}
          border={false}
          titleContainer={{
              firstTitle: "Status online",
          }}
        />

        <Li // Nome do usuário
          onPress={()=> {}}
          icon={
            <IconContainer>
              <Entypo name="email" size={22} color="#fff" />
            </IconContainer>
          }
          avatarSize={24}
          border={false}
          titleContainer={{
              firstTitle: "Nome do usuário",
          }}
        />

        <Title>Preferências</Title>{/** PREFERENCIAS */}
        <Li // Notificações e sons
          onPress={()=> {}}
          icon={
            <IconContainer>
              <Icon name="md-moon" size={24} />
            </IconContainer>
          }
          avatarSize={24}
          border={false}
          titleContainer={{
              firstTitle: "Notificações e sons",
          }}
        />

        <Li // Economizador de Dados 
          onPress={()=> {}}
          icon={
            <IconContainer>
              <AntDesign name="linechart" size={22} color="#fff" />
            </IconContainer>
          }
          avatarSize={24}
          border={false}
          titleContainer={{
              firstTitle: "Economizador de Dados",
          }}
        />

        <Li // Story
          onPress={()=> {}}
          icon={
            <IconContainer>
              <MaterialCommunityIcons name="cards" size={22} color="#fff" />
            </IconContainer>
          }
          avatarSize={24}
          border={false}
          titleContainer={{
              firstTitle: "Story",
          }}
        />

        <Li // Configurações de mensagens
          onPress={()=> {}}
          icon={
            <IconContainer>
              <AntDesign name="message1" size={22}  color="#fff"/>
            </IconContainer>
          }
          avatarSize={24}
          border={false}
          titleContainer={{
              firstTitle: "Configurações de mensagens",
          }}
        />

        <Li // Pessoas
          onPress={()=> {}}
          icon={
            <IconContainer>
              <Icon name="ios-people" size={24} />
            </IconContainer>
          }
          avatarSize={24}
          border={false}
          titleContainer={{
              firstTitle: "Pessoas",
          }}
        />

        <Li // Fotos e midía
          onPress={()=> {}}
          icon={
            <IconContainer>
              <Icon name="md-photos" size={24} />
            </IconContainer>
          }
          avatarSize={24}
          border={false}
          titleContainer={{
              firstTitle: "Fotos e midía",
          }}
        />

        <Li // Conversas secretas
          onPress={()=> {}}
          icon={
            <IconContainer>
              <Icon name="md-lock" size={24}/>
            </IconContainer>
          }
          avatarSize={24}
          border={false}
          titleContainer={{
              firstTitle: "Conversas secretas",
          }}
        />

        <Li // M
          onPress={()=> {}}
          icon={
            <IconContainer>
              <Text>M</Text>
            </IconContainer>
          }
          avatarSize={24}
          border={false}
          titleContainer={{
              firstTitle: "M",
          }}
        />

        <Li // Ícones de bate-papo
          onPress={()=> {}}
          icon={
            <IconContainer>
              <MaterialCommunityIcons name="circle-medium" size={22} color="#fff" />
            </IconContainer>
          }
          avatarSize={24}
          border={false}
          titleContainer={{
              firstTitle: "Ícones de bate-papo",
          }}
        />

        <Li // Atualização do aplicativo
          onPress={()=> {}}
          icon={
            <IconContainer>
              <Icon name="ios-download" size={24} />
            </IconContainer>
          }
          avatarSize={24}
          border={false}
          titleContainer={{
              firstTitle: "Atualização do aplicativo",
          }}
        />


        <Title>Conta</Title>{/** CONTA */}
        <Li // Trocar de conta
          onPress={()=> {}}
          icon={
            <IconContainer>
              <AntDesign name="logout" size={22} color="#fff" />
            </IconContainer>
          }
          avatarSize={24}
          border={false}
          titleContainer={{
              firstTitle: "Trocar de conta",
          }}
        />

        <Li // Configurações da conta
          onPress={()=> {}}
          icon={
            <IconContainer>
              <Icon name="ios-settings" size={24} />
            </IconContainer>
          }
          avatarSize={24}
          border={false}
          titleContainer={{
              firstTitle: "Configurações da conta",
          }}
        />

        <Li // Relatar problema técnico
          onPress={()=> {}}
          icon={
            <IconContainer>
              <MaterialIcons name="report-problem" size={22} color="#fff" />
            </IconContainer>
          }
          avatarSize={24}
          border={false}
          titleContainer={{
              firstTitle: "Relatar problema técnico",
          }}
        />

        <Li // Ajuda
          onPress={()=> {}}
          icon={
            <IconContainer>
              <Icon name="md-help-circle" size={24} />
            </IconContainer>
          }
          avatarSize={24}
          border={false}
          titleContainer={{
              firstTitle: "Ajuda",
          }}
        />

        <Li // Conteudo legal e políticas
          onPress={()=> {}}
          icon={
            <IconContainer>
              <MaterialCommunityIcons name="file-document-outline" size={24} color="#fff" />
            </IconContainer>
          }
          avatarSize={24}
          border={false}
          titleContainer={{
              firstTitle: "Conteudo legal e políticas",
          }}
        />


      </Ul>

    </Container>
  );
}
