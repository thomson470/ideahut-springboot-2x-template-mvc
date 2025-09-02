package net.ideahut.springboot.template.entity.app;

import javax.persistence.AttributeOverride;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ForeignKey;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import lombok.Getter;
import lombok.Setter;
import net.ideahut.springboot.annotation.Audit;
import net.ideahut.springboot.entity.EntityAudit;

@Audit
@Entity
@Table(name = "menu_role")
@Setter
@Getter
@SuppressWarnings("serial")
public class MenuRole extends EntityAudit {

	@EmbeddedId
	@AttributeOverride(name = "menuCode", column = @Column(name = "menu_code", nullable = false, length = 64))
	@AttributeOverride(name = "menuType", column = @Column(name = "menu_type", nullable = false, length = 16))
	@AttributeOverride(name = "roleCode", column = @Column(name = "role_code", nullable = false, length = 64))
	private MenuRoleId id;
	
	@OnDelete(action = OnDeleteAction.CASCADE)
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumns(
		value = {
			@JoinColumn(name = "menu_code", referencedColumnName = "menu_code", nullable = false, insertable = false, updatable = false),
			@JoinColumn(name = "menu_type", referencedColumnName = "menu_type", nullable = false, insertable = false, updatable = false)
		},
		foreignKey = @ForeignKey(name = "fk_menu_role__menu")
	)
	private Menu menu;
	
	@OnDelete(action = OnDeleteAction.CASCADE)
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(
		name = "role_code", 
		nullable = false, 
		insertable = false, 
		updatable = false, 
		foreignKey = @ForeignKey(name = "fk_menu_role__role")
	)
	private Role role;
	
	public MenuRole() {}
	
	public MenuRole(MenuRoleId id) {
		this.id = id;
	}
	
}
